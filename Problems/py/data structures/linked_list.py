class Node:
    # obj for storing single node of linkedlist
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<Node data: %s>" % self.data

class SLinkedList:
    def __init__(self):
         self.head = None

    def is_empty(self):
        return self.head == None

    # convenient method
    def size(self):
        current = self.head
        count = 0

        while current:
            count += 1
            current = current.next_node
        
        return count

    def add(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

    def search(self, key):
        current = self.head

        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node
            return print("Not found")

    # representation method
    def __repr__(self):
        nodes = []
        current = self.head

        while current:
            if current is self.head:
                nodes.append("[Head: %s" % current.data)
            elif current.next_node is None:
                nodes.append("[tail: %s" % current.data)
            else:
                nodes.append("[%s" % current.data)
            current = current.next_node
        return '-> '.join(nodes)