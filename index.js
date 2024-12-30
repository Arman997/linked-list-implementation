class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
         this.head = null;
         this.tail = null;
        }

    toprint(){
        let tmp = this.head
        while(tmp) {
            console.log(tmp.data);
            tmp = tmp.next
        }
    }
        
    push_front(nod) {
        let newnod = new Node(nod);
        if(!this.head){
            this.head = newnod;
            this.tail = newnod;
            return;
        }
        newnod.next = this.head
        this.head = newnod;
    }
    push_back(elem){
        if(!this.head){
            this.push_front(elem)
            return;
        }
        let nod = new Node(elem);
        this.tail.next = nod;
        this.tail = nod;
    }
    pop_front(){
        if(!this.head)return;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return 
        }
        this.head = this.head.next;
    }
    pop_back(){
        if(!this.head)return;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return
        }
        let tmp = this.head;
        while (tmp.next !== this.tail) {
            tmp = tmp.next
        }
        
        this.tail = tmp
        this.tail.next = null;
    }
    searchfirst(val){
        let tmp = this.head;
        let id = 0;
        while (tmp) {
            if(tmp.data === val){
                return id;
            }
            id++;
            tmp = tmp.next;
        }
        return -1;
    }
    searchlast(val){
        let tmp = this.head;
        let id = 0;
        let res = -1;
        while (tmp) {
            if(tmp.data === val){
                res = id;
            }
            id++;
            tmp = tmp.next;
        }

        return res;
        
    }
}

let obj = new LinkedList();
obj.push_back(5)
obj.push_back(2)
obj.push_back(5)
obj.push_back(4)
obj.push_back(5)
obj.push_back(11)

console.log(obj.searchlast(12));

// obj.toprint()





