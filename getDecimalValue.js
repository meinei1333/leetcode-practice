class Linkedlist {
    constructor() {
        this.length = 0;
        // 第一個節點的指標
        this.head = null;
    }
    append(val) {
        // new 一個新的節點
        const node = new ListNode(val)
        let current;

        if (this.head === null) {
            // 第一種情況：原本串列為空，將 head 指向 null 改為指向新的節點
            this.head = node;
        } else {
            // 第二種情況：使用 current 當做輔助指標，先指到 head 指到的節點（我們前面說過鏈結串列只能循序存取）。使用 while 迴圈尋找到最後的節點（若 current.next 不為 null 代表後面還有節點，並將 current 指到下一個節點 current.next），當 current.next 等於 null 時我們知道已經到了最後節點，此時將 current.next 指到新增的 node 就算新增完畢囉

            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        // 最後別忘了新增一下串列的長度！
        this.length++;
    }

    toString() {
        // 建立一個變數幫助迴圈
        let current = this.head;
        let string = '';
        // 循序檢查 current 指到的 node 是否存在，若存在則串接資料內容成字串
        while (current) {
            string += current.val;
            // 指到下一個元素
            current = current.next;
        }
        return string;
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {Linkedlist} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    var listNode = new Linkedlist();
    head.forEach(val => {
        listNode.append(val);
    });
    var str = listNode.toString();
    return parseInt(str, 2)
};

console.log(getDecimalValue([1, 0, 1, 1, 1]));