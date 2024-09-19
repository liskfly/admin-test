// import { constantRoutes } from '@/router'
import Layout from '@/layout'

export function dataPro(data) {
    let item = [];
    // console.log(data);
    data.forEach((list) => {
      let newData = {};
      newData.path = list.path;
    //   newData.title = list.title;
      newData.name = list.xyClientMenuName;
      newData.component=list.component
      newData.meta={
          title:list.title
      }
      // console.log(list.childs);
      newData.children = list.childs ? dataPro(list.childs) : []; //如果还有子集，就再次调用自己
      item.push(newData);
    });
    return item;
  }
export function disposeRoutes(data) {
    let result = [];
    let tempObj = {};

    data.forEach((item) => {
        let pathArr = item.var11.split("/");
        let componentName = item.var41.replace("/", "");

        let childObj = {
            path: item.var12,
            name: item.var22,
            meta: {
                title: item.var31
            },
            component: componentName
        };

        if (pathArr.length > 1) {
            let parentPath = pathArr[1];
            if (tempObj[parentPath] === undefined) {
                tempObj[parentPath] = {
                    path: `/${parentPath}`,
                    component: item.var4,
                    meta: {
                        title: item.var3
                    },
                    name: item.var21,
                    children: []
                };
            }
            tempObj[parentPath].children.push(childObj);
        } else {

            let obj = {
                path: item.var11,
                component: item.var4,
                meta: {
                    title: item.var3
                },
                name: item.var21,
                children: [childObj]
            };
            result.push(obj);
        }

    });

    for (let key in tempObj) {
        result.push(tempObj[key]);
    }

    console.log(result);
}

export function getAsyncRoutes(routes) {
    const res = []
    // 定义路由中需要的自定名
    const keys = ['path', 'name', 'children',  'meta']
    // 遍历路由数组去重组可用的路由
    routes.forEach(item => {
        const newItem = {};
        if (item.component) {
            // 判断 item.component 是否等于 'Layout',若是则直接替换成引入的 Layout 组件
            if (item.component === 'Layout') {
                newItem.component = Layout
            } else {
            //  item.component 不等于 'Layout',则说明它是组件路径地址，因此直接替换成路由引入的方法
                newItem.component = resolve => require([`@/views${item.component}`],resolve)
                
                // 此处用reqiure比较好，import引入变量会有各种莫名的错误
                // newItem.component = (() => import(`@/views/${item.component}`));
            }
        }
        for (const key in item) {
            if (keys.includes(key)) {
                newItem[key] = item[key]
            }
        }
        // 若遍历的当前路由存在子路由，需要对子路由进行递归遍历
        if (newItem.children && newItem.children.length) {
            newItem.children = getAsyncRoutes(item.children)
        }
        res.push(newItem)
    })
    // 返回处理好且可用的路由数组
    // console.log(res.component);
    return res
}