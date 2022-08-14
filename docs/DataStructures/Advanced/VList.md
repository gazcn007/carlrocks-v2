---
id: VList
title: VList
sidebar_label: VList
---

# VList
Implement an array that has flexible length. In other words, implement ArrayList in Java without using ArrayList. 

- Implement 2 methods:
    - void append(T element) -> should be O(1)
    - T getByIndex(int index) -> should be O(log n)
- Full explanation: 
    - http://www.keithschwarz.com/interesting/code/vlist/VList.java.html
- TL;DR:
    - ArrayList ditches previous arrays after a new longer array is created, VList save those previous arrays and link them together

## Knowledge Points
- Do you know how does Java implement ArrayList, why is it implement that way (1, 2, 4, 8, 16...growth):
    - Java implement ArrayList by making a new Array with size * 2, then copy the original elements over.
    - append might be -> O(n)
    - get is always -> O(1)

## Implementation

```java
class VList<T> {

    private VListCell<T> head;
    int size;

    private class VListCell<T> {
        public T[] elems;
        public VListCell<T> next;
        public VListCell<T> prev;
        public int count;
        public VListCell(int numElems, VListCell<T> next){
            this.elems = (T[]) new Object[numElems];
            this.next = next;
            this.prev = null;
            if(next != null){
                next.prev = this;
            }
            count = 0;
        }
        
        public boolean isFull(){
            return this.count == elems.length;
        }
    }
    
    public boolean add(T elem){
        if(head == null || head.isFull()){
            head = new VListCell<T>(head == null ? 1 : head.elems.length * 2, head);
        }
        head.elems[head.count++] = elem;
        size++;
        return true;
    }
    
    public T get(int index){
        index = size - 1 - index; // find the reverse index
        VListCell<T> cur = head;
        while(index >= cur.count){
            index -= cur.count;
            cur = cur.next;
        }
        index = cur.count - index - 1;
        return cur.elems[index];
    }
}
```