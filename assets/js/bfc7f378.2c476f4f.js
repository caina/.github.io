(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[7737],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1289:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"howto-javascript-nestjs-crud-operation",title:"Creating a CRUD operation using NEST JS",sidebar_label:"Crud operation"},l={unversionedId:"howto/javascript/nestjs/howto-javascript-nestjs-crud-operation",id:"howto/javascript/nestjs/howto-javascript-nestjs-crud-operation",isDocsHomePage:!1,title:"Creating a CRUD operation using NEST JS",description:"This is a super section, with multiple links, follow the ones fit best for you.",source:"@site/docs/howto/javascript/nestjs/nestjs-crud-operation.md",sourceDirName:"howto/javascript/nestjs",slug:"/howto/javascript/nestjs/howto-javascript-nestjs-crud-operation",permalink:"/docs/howto/javascript/nestjs/howto-javascript-nestjs-crud-operation",version:"current",sidebar_label:"Crud operation",frontMatter:{id:"howto-javascript-nestjs-crud-operation",title:"Creating a CRUD operation using NEST JS",sidebar_label:"Crud operation"}},p=[{value:"Scafolding",id:"scafolding",children:[]},{value:"Database",id:"database",children:[{value:"Creating the entity",id:"creating-the-entity",children:[]},{value:"Setting up the provider",id:"setting-up-the-provider",children:[]},{value:"Adding the module",id:"adding-the-module",children:[]}]},{value:"Controller.",id:"controller",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a super section, with multiple links, follow the ones fit best for you."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pro tip use a todo list to never miss a point.")),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"https://docs.nestjs.com/first-steps"},"Install NestJS")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"#scafold"},"Creating the scafold")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"#database"},"Configuring Database")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"#controller"},"Controller"))),(0,o.kt)("h2",{id:"scafolding"},"Scafolding"),(0,o.kt)("p",null,"Although nestJs has a great CLI, lets use a more BDD driven aproach.\nUnder ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," create the following structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- src\n--/database\n---ormconfig.ts\n---database.providers\n---database.module\n---/my-feature-entity\n----my-feature.entity.ts\n----my-feature.provider.ts\n---/migrations\n--/my-feature\n---/api\n----controller.ts\n---/services\n---/dto.ts\n")),(0,o.kt)("p",null,"the reason for separating the database layer from the business domain is so that we can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm"},"TypeORM"),"."),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("p",null,"you'll need for local developent a docker compose file with your choice of database"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"howto/docker/docker-compose/mysql-57"},"for Mysql"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'Important! If you are using mysql, install the "mysql2" driver instead of the normal one.')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { join } from 'path';\nimport { ConnectionOptions } from 'typeorm';\nimport * as fs from 'fs';\n\nconst conn = {\n  host: 'localhost',\n  port: 3306,\n  username: 'root',\n  password: 'root',\n  database: 'idk_console_db_dev',\n  ssl: undefined,\n};\n\nconst connectionOptions: ConnectionOptions = {\n  type: 'mysql',\n  ...conn,\n  synchronize: false,\n  dropSchema: false,\n  migrationsRun: true,\n  entities: [__dirname + '/../**/*.entity{.ts,.js}'],\n  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],\n  cli: {\n    migrationsDir: 'src/database/migrations',\n  },\n};\n\nexport default connectionOptions;\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"ormconfig.ts")),(0,o.kt)("p",null,"Its better to keep this file a side so we can use it to call typeOrm over its configuration, more in ",(0,o.kt)("a",{parentName:"p",href:"#configure-typeOrm"},"configuring TypeOrm")),(0,o.kt)("h3",{id:"creating-the-entity"},"Creating the entity"),(0,o.kt)("p",null,"you can read more about entities at Typeorm documentation, here is just a mockup, although I strongly recommend always use soft delete."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';\nimport { BaseEntity } from '../baseEntity';\n\n@Entity('my_feature')\nexport class MyFeature {\n  @PrimaryGeneratedColumn('uuid')\n  id: string;\n\n  @Column({ name: 'sample', nullable: false })\n  sample: string;\n\n    @Column({\n        name: 'created_at',\n        type: 'timestamp',\n        default: () => 'CURRENT_TIMESTAMP',\n    })\n    createdDate: string;\n    \n    @Column({\n        name: 'modified_at',\n        type: 'timestamp',\n        default: () => 'CURRENT_TIMESTAMP',\n    })\n    modifiedDate: string;\n    \n    @DeleteDateColumn({\n        name: 'deleted_at',\n    })\n    deletedAt?: Date;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"my-feature.entity.ts")),(0,o.kt)("h3",{id:"setting-up-the-provider"},"Setting up the provider"),(0,o.kt)("p",null,"you can use enuns for the provider names."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Connection, Repository } from 'typeorm';\nimport { MyFeature } from './my-feature.entity';\n\nexport const myFeatureProviders = [\n  {\n    provide: 'MYFEATURE_REPOSITORY',\n    useFactory: (connection: Connection) => connection.getRepository(MyFeature),\n    inject: ['DATABASE_CONNECTION'],\n  },\n];\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"my-feature.provider.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createConnection } from 'typeorm';\nimport connectionOptions from './ormconfig';\n\nexport const databaseProviders = [\n  {\n    provide: 'DATABASE_CONNECTION',\n    useFactory: async () => await createConnection(connectionOptions),\n  },\n];\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"database.providers")),(0,o.kt)("h3",{id:"adding-the-module"},"Adding the module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Module } from '@nestjs/common';\nimport { databaseProviders } from './database.providers';\nimport { myFeatureProviders } from './my-feature/my-feature.providers';\n\n@Module({\n  providers: [...databaseProviders, ...myFeatureProviders],\n  exports: [...databaseProviders, ...myFeatureProviders],\n})\nexport class DatabaseModule {}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"database.module.ts")),(0,o.kt)("p",null,"and thats it, database is ready to roll."),(0,o.kt)("h2",{id:"controller"},"Controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Body,\n  Controller,\n  Delete,\n  Get,\n  Param,\n  Post,\n  Put,\n  Query,\n  UsePipes,\n  ValidationPipe,\n} from '@nestjs/common';\nimport { MyFeatureDto, CreateMyFeatureDto } from '../dto';\nimport { MyFeatureService } from '../services/my-feature.service';\n\n@Controller('api/myfeature')\nexport class MyFeatureController {\n  constructor(private myFeatureService: MyFeatureService) {}\n\n  @Post()\n  @UsePipes(new ValidationPipe({ transform: true }))\n  async create(@Body() dto: CreateMyFeatureDto): Promise<MyFeatureDto[]> {\n    await this.myFeatureService.create(dto);\n    return this.myFeatureService.find(undefined);\n  }\n\n  @Delete('/:id')\n  async delete(@Param('id') id: string): Promise<MyFeatureDto[]> {\n    await this.myFeatureService.delete(id);\n    return this.myFeatureService.find(undefined);\n  }\n\n  @Get()\n  @UsePipes(new ValidationPipe({ transform: true }))\n  async find(@Query() request): Promise<MyFeatureDto[]> {\n    return this.myFeatureService.find(request.search);\n  }\n\n  @Put()\n  @UsePipes(new ValidationPipe({ transform: true }))\n  async update(@Body() dto: MyFeatureDto): Promise<MyFeatureDto> {\n    return await this.myFeatureService.update(dto);\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"my-featureController.ts")),(0,o.kt)("h1",{id:"configure-typeorm"},"Configure TypeOrm"),(0,o.kt)("p",null,"over package.json, add the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-package.json"},'"scripts": {\n    "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js --config src/persistence/ormconfig.ts",\n    "migrations": "npm run typeorm migration:run"\n}\n')))}u.isMDXComponent=!0}}]);