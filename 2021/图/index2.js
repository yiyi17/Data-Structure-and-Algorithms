class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  /**
   * 
   * @param {*} vertex 
   * @description Add a vertex to the graph
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  /**
   * 
   * @param {*} vertex1 
   * @param {*} vertex2 
   * @description Add an edge between two vertices
   */
  addEdge(vertex1, vertex2) {
    if(!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if(!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1)
  }

  /**
   * @description 图的展示
   */
  display() {
    for(let vertex in this.adjacencyList) {
      console.log(vertex, '->', [...this.adjacencyList[vertex]].join(', '))
    }
  }
  /**
   * 
   * @param {*} vertex1 
   * @param {*} vertex2 
   * @returns Boolean
   * @description Check if there is an edge between two vertices
   */
  hasEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
  }

  /**
   * 
   * @param {*} vertex1 
   * @param {*} vertex2 
   * @description Remove an edge between two vertices
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  /**
   * 
   * @param {*} vertex 
   * @returns 
   * @description Remove a vertex from the graph
   */
  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return;

    // 删除边
    for(let v in this.adjacencyList) {
      this.removeEdge(v, vertex);
    }
    // 删除定点
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph

graph.display()

console.log(graph.hasEdge('A', 'B'))

graph.removeVertex('B')
// graph.removeEdge('A', 'B')
graph.display()
