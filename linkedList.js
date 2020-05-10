class Node {
    next;
    val;
    constructor(val) {
        this.val = val;
    }
}

class LinkedList {
    obj = {};
    temp;
    append(val) {
        if (!this.obj.val) {
            this.obj = new Node(val);
        } else {
            if (!this.temp) {
                this.obj.next = new Node();
                this.temp = this.obj.next;
            }
            this.temp.next = new Node(val);
            this.temp = this.temp.next;
        }
    }

    getlistNode() {
        let result = [];
        let temp = this.obj;
        while (temp) {
            if (temp.val) {
                result.push(temp.val);
                temp = temp.next
            }
        }
        return result;
    }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log('obj',linkedList.obj);
console.log('getlistNode:', linkedList.getlistNode())