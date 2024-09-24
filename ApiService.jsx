
const API_BASE_URL = ""

class ApiService {
  constructor() {
    if (!Singleton.instance) {
      this.PATH = API_BASE_URL
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  get = () => {
    
  }

  post = (data) => {

  }
}
  
  const instance = new Singleton();
  Object.freeze(instance);
  export default instance;
  