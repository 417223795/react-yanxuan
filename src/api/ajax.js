import axios from "axios"


export default function ajax(url,data={},type="GET") {
  return new Promise(function (resolve,reject) {
    let promise;
    if(type==="GET"){
      let dataSte="";
      Object.keys(data).forEach(key=>{
        dataSte += key + '=' + data[key] + '&'
      });
      if(dataSte !==""){
        dataSte = dataSte.substring(0, dataSte.lastIndexOf('&'));
        url = url + '?' + dataSte
      }
      promise = axios.get(url)
    }else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
