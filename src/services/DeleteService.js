class _DeleteService {
    constructor() {
      if (_DeleteService.SingletonInstance) {
        return _DeleteService.SingletonInstance;
      }
      
      this.deletedComments = [];
      this.subscribers = [];
      _DeleteService.SingletonInstance = this;
    }
  
    deleteComment = (id)=>{
        this.deletedComments.push(id)
        this.notify()
    }

    filterComments = (comments)=>{
        return comments.filter(c => !this.deletedComments.includes(c.id) )
    }



    subscribe(callback) {
        this.subscribers.push(callback);
      }
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(cb => cb !== callback);
    }
    
    notify() {
        this.subscribers.forEach(callback => callback());
    }
}
  
const DeleteService = new _DeleteService();
export default DeleteService;
  