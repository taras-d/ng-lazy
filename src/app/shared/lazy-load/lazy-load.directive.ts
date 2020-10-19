import {
  Directive, Input, OnInit, OnDestroy, Compiler, NgModuleFactory, Injector,
  ViewContainerRef, NgModuleRef, ComponentRef
} from '@angular/core';

import { lazyModulesMap } from '../../lazy-modules-map';

// cache for loaded modules
const modulesCache = new Map();

@Directive({ selector: 'lazy-load' })
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() module: string;
  @Input() component: string;
  @Input() inputs: {[key: string]: any} = {};

  private componentRef: ComponentRef<any>;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  ngOnInit(): void {
    this.loadModule()
      .then(moduleRef => this.createComponent(moduleRef));
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private loadModule(): Promise<NgModuleRef<any>> {
    // check if module already in cache
    if (modulesCache.has(this.module)) {
      return modulesCache.get(this.module);
    }

    // get module load function
    const loadFn = lazyModulesMap[this.module];
    if (!loadFn) {
      return Promise.reject( new Error(`'${this.module}' is not found in lazy-modules-map.ts`) );
    }

    // load module
    const promise = loadFn().then(jsModule => {

      // get module class
      const moduleClass = jsModule[this.module];
      if (!moduleClass) {
        throw new Error(`'${this.module}' is not exported from module file`);
      }

      // compile module (create module factory)
      return this.compiler.compileModuleAsync(moduleClass);
    }).then((moduleFactory: NgModuleFactory<any>) => {

      // create module
      console.log(`Create ${this.module}`);
      return moduleFactory.create(this.injector);
    });

    // add module promise to cache
    modulesCache.set(this.module, promise);

    return promise;
  }

  private createComponent(moduleRef: NgModuleRef<any>): void {
    // get component class
    const componentClass = moduleRef.instance.entry[this.component];
    if (!componentClass) {
      throw new Error(`'${this.component}' is not found in module entry`);
    }

    // get component factory
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentClass);

    // create (render) component
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);

    // pass inputs to component
    Object.keys(this.inputs).forEach(name => this.componentRef.instance[name] = this.inputs[name]);

    // log instance to console
    console.log(this.componentRef.instance);
  }
}
