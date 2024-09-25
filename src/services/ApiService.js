class _APIService {
    constructor() {
      if (_APIService.SingletonInstance) { // Utilização de IA para construir singletons em js 
        return _APIService.SingletonInstance;
      }
      
      this.baseUrl = "https://jsonplaceholder.typicode.com";
      _APIService.SingletonInstance = this;
    }
  
    
    async _get(path){
        try {
            const response = await fetch(`${this.baseUrl}/${path}`);
            if (!response.ok) { 
                console.log("## ERRO na requisição.\n url: " + path)
                console.log( response )
            }
            return await response.json();
          } 
        catch (e) {
            console.log("## ERRO na tradução para JSON.\n url: " + path)
        }
    }
    
    async getUsers() {
        return await this._get('users');
    }
  
    async getPosts(userId) {
        return await this._get(`posts?userId=${userId}`);
    }
  
    async getComments(postId) {
        return await this._get(`comments?postId=${postId}`);
    }
}
  
const ApiService = new _APIService();
Object.freeze( ApiService); // Utilização de IA para construir singletons em js
export default ApiService;
  