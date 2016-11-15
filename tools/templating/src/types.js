"use strict"

// Keep in length order

module.exports = {
  detailComponent: {
    dir: true,
    templates: [{
      name: 'detail.component.ts',
      imports: ['module.ts'],
      listItems: ['declarations', 'exports'],
    },{
      name: 'detail-resolve.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
    },{
      name: 'detail.component.pug',
      file: 'component.pug',
    },{
      name: 'detail.component.css',
      file: 'component.css',
    }],
  },
  apiResolveService: {
    dir: false,
    templates: [{
      name: 'resolve.service.ts',
      file: 'api-resolve.service.ts',
      imports: ['module.ts', 'routes.ts'],
      listItems: ['providers'],
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
      imports: ['routes.ts'],
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
