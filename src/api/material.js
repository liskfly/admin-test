import csrequest from "@/utils/csRequest"

export function getMaterial(title) {
  return csrequest({
    url: "/WebService_API.asmx?op=SYS_Loading_BaseInfo7",
    method: "post",
    data: `<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
              <soap12:Body>
                <SYS_Loading_BaseInfo7 xmlns="http://tempuri.org/">
                  <MODULENAME>${title}</MODULENAME>
                </SYS_Loading_BaseInfo7>
              </soap12:Body>
            </soap12:Envelope>`
  });
}
export function insertMaterial(form, title) {
  return csrequest({
    url: "/WebService_API.asmx?op=SYS_Insert_BasnfeIo7",
    method: "post",
    data: `<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
              <soap12:Body>
              <SYS_Insert_BasnfeIo7 xmlns="http://tempuri.org/">
                ${form}
               <ModName>${title}</ModName>
              </SYS_Insert_BasnfeIo7>
              </soap12:Body>
            </soap12:Envelope>`
  });
}

export function reviseMaterial(form) {
  return csrequest({
    url: "/WebService_API.asmx?op=SYS_Loading_BaseInfo7",
    method: "post",
    data: `<?xml version="1.0" encoding="utf-8"?>
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
          <soap12:Body>
          <Alter_BaseInfo xmlns="http://tempuri.org/">
            ${form}
          </Alter_BaseInfo>
          </soap12:Body>
        </soap12:Envelope>`
  });
}

export function deleteData(data) {
  return csrequest({
    url: "/WebService_API.asmx?op=Delete_BaseInfo",
    method: "post",
    data: `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <Delete_BaseInfo xmlns="http://tempuri.org/">
          <ID>${data}</ID>
        </Delete_BaseInfo>
      </soap12:Body>
    </soap12:Envelope>`
  });
}

export function getAssociation(data) {
  return csrequest({
    url: "/WebService_API.asmx?op=SYS_Loading_Relation",
    method: "post",
    data: `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <SYS_Loading_Relation xmlns="http://tempuri.org/">
          <MODENAME>${data}</MODENAME>
        </SYS_Loading_Relation>
      </soap12:Body>
    </soap12:Envelope>`
  });
}

export function setAssociation(form) {
  return csrequest({
    url: "/WebService_API.asmx?op=SYS_LINKParentChild",
    method: "post",
    data: `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <SYS_LINKParentChild xmlns="http://tempuri.org/">
          ${form}
        </SYS_LINKParentChild>
      </soap12:Body>
    </soap12:Envelope>`
  });
}

export function getContainerMoves(conName) {
  return csrequest({
    url: "/container/getContainerMoves",
    method: "post",
    data: conName
  });
}