/* eslint-disable prettier/prettier */
export const DYNAMIC_LOGGER_PROVIDER  = {
      provide: 'DYNAMIC_LOGEER',
      useFactory: ()=>{

          if(process.env.NODE_ENV === 'prod'){
             return {log: (msg: string)=> console.log('[ProdLogger]',msg)}
          }else{
              return {log: (msg: string)=> console.log('[DevLogger]',msg)}
          }
      }
}
