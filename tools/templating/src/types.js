"use strict"

// Keep in length order

module.exports = {
  object: {},
  objectModule: {
    dir: true,
    templates: [{
      name: 'module.ts',
      imports: ['module.ts'],
      listItems: ['imports'],
    },{
      name: 'component.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['declarations', 'exports'],
    },{
      name: 'component.pug',
      file: 'router.component.pug',
    },{
      name: 'component.css',
    },{
      name: 'routes.ts',
      file: 'object.routes.ts',
      imports: ['routes.ts'],
      addRoute: true,
    }],
  },
  listModule: {
    dir: 'list',
    templates: [{
      name: 'list.module.ts',
      file: 'form.module.ts',
      imports: ['module.ts'],
      listItems: ['imports'],
    },{
      name: 'list.component.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['declarations', 'exports'],
    },{
      name: 'list-resolve.service.ts',
      file: 'resolve.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    },{
      name: 'list-auth.service.ts',
      file: 'can-activate.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    },{
      name: 'list.component.pug',
    },{
      name: 'list.component.css',
    },{
      name: 'list.routes.ts',
      imports: ['routes.ts'],
      //addRoute: true,
    }],
  },
  detailModule: {
    dir: 'detail',
    templates: [{
      name: 'detail.module.ts',
      file: 'form.module.ts',
      imports: ['module.ts'],
      listItems: ['imports'],
    },{
      name: 'detail.component.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['declarations', 'exports'],
    },{
      name: 'detail-resolve.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    },{
      name: 'detail-auth.service.ts',
      file: 'can-activate.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    },{
      name: 'detail.component.pug',
    },{
      name: 'detail.component.css',
      file: 'component.css',
    },{
      name: 'detail.routes.ts',
      imports: ['routes.ts'],
      //addRoute: true,
    }],
  },
  resolveService: {
    dir: false,
    templates: [{
      name: 'resolve.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    }],
  },
  canActivateService: {
    dir: false,
    templates: [{
      name: 'can-activate.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    }],
  },
  commonModule: {
    dir: true,
    templates: [{
      name: 'module.ts',
      file: 'common.module.ts',
      imports: ['module.ts'],
      listItems: ['imports'],
    }],
  },
  service: {
    dir: false,
    templates: [{
      name: 'service.ts',
      imports: ['module.ts'],
      listItems: ['providers'],
    }],
  },
  component: {
    dir: true,
    templates: [{
      name: 'component.ts',
      imports: ['module.ts'],
      listItems: ['declarations', 'exports'],
    },{
      name: 'component.pug',
    },{
      name: 'component.css',
    }],
  },
  module: {
    dir: true,
    templates: [{
      name: 'module.ts',
      imports: ['module.ts'],
      listItems: ['imports'],
    },{
      name: 'component.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['declarations', 'exports'],
    },{
      name: 'component.pug',
      file: 'router.component.pug',
    },{
      name: 'component.css',
    },{
      name: 'routes.ts',
      imports: ['routes.ts'],
      addRoute: true,
    }],
  },
}
