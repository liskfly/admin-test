import request from "@/utils/csRequest";

export function getFirstMeun() {
  return request({
    url: "/client/findAll",
    method: "post",
  });
}

export function getChildMeun(data) {
  return request({
    url: "/client/findByFid",
    method: "post",
    params: {
      fid: data,
    },
  });
}

export function addMeun(data) {
  return request({
    url: "/client/add",
    method: "post",
    data,
  });
}

///delete
export function deleteMeun(data) {
  return request({
    url: "/client/delete",
    method: "post",
    params: {
      id: data,
    },
  });
}

export function updateMeun(data) {
  return request({
    url: "/client/update",
    method: "post",
    data,
  });
}

//角色添加
export function addRole(data) {
  return request({
    url: "/xyRole/add",
    method: "post",
    data,
  });
}
//角色查询
export function getRole(data) {
  return request({
    url: "/xyRole/findAll",
    method: "post",
    data,
  });
}
///xyRole/delete
export function deleteRole(data) {
  return request({
    url: "/xyRole/delete",
    method: "post",
    params: {
      roleId: data,
    },
  });
}

export function getMeunRole(data) {
  return request({
    url: "/xyRole/getClients",
    method: "post",
    params: {
      roleIds: data,
    },
  });
}

//获取所有用户
export function getEmployee(data) {
  return request({
    url: "/employee/findAll",
    method: "post",
    data,
  });
}

//添加用户
export function addEmployeeRole(data) {
  return request({
    url: "/employeeRole/add",
    method: "post",
    data,
  });
}

//查询用户
export function getIDEmployee(data) {
  return request({
    url: "/employee/findByEmployeeName",
    method: "post",
    params: {
      employeeName: data,
    },
  });
}

//删除用户
export function deleteEmployee(data) {
  return request({
    url: "/employeeRole/delete",
    method: "post",
    params: {
      empId: data,
    },
  });
}
//登录
export function login(data) {
  return request({
    url: "/employee/login",
    method: "post",
    data,
  });
}

//获取员工信息
export function info(data) {
  return request({
    url: "/employee/findByEmployeeName",
    method: "post",
    params: {
      employeeName: data,
    },
  });
}

// export function getRoutes(data) {
//   return request({
//     url: "/employeeRole/findEmpMenus",
//     method: "post",
//     params: {
//       empId: data,
//     },
//   });
// }

export function updateUri(data) {
  return request({
    url: "/agency/updateUri",
    method: "post",
    params: {
      apiType: 1,
      data: data,
      uri: "http://172.20.99.27/PcbApi/api/repair/es_move",
    },
  });
}

export function getContainerMoves(data) {
  return request({
    url: "/container/getContainerMoves",
    method: "post",
    params: {
      conName: data,
    },
  });
}
//修改角色菜单
export function updateRoleMeun(data) {
  return request({
    url: "/xyRole/update",
    method: "post",
    data,
  });
}
//查询角色

export function findEmployeeRoles(data) {
  return request({
    url: "/employeeRole/findEmployeeRoles",
    method: "post",
    params: {
      empId: data,
    },
  });
}

export function deletefirstRole(data) {
  return request({
    url: "/employeeRole/deleteRole",
    method: "post",
    params:data
  });
}

//
export function getRoutes(data) {
  return request({
    url: "/xyRole/getClients",
    method: "post",
    params: {
      roleIds: data,
    },
  });
}

//插针机工艺参数
export function pressFitAdd(data) {
  return request({
    url: "/pressFit/add",
    method: "post",
    data,
  });
}

export function findAllName(data) {
  return request({
    url: "/pressFit/findAllName",
    method: "post",
    data,
  });
}