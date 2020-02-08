

// Instantiate a new graph
var Graph = function() {
    this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    if (!(this.list[node])) {
        this.list[node] = [];
    }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    for (let elem in this.list) {
        if (Number(elem) === node) {
            return true;
        }
    }
    return false;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return this.list[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.list[fromNode].push(toNode);
    this.list[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (let elem in this.list) {
        if (this.list[elem].includes(toNode)) {
            this.list[elem].splice(this.list[elem].indexOf(toNode), 1);
        }
        if (this.list[elem].includes(fromNode)) {
            this.list[elem].splice(this.list[elem].indexOf(fromNode), 1);
        }
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    delete this.list[node];
    for (let elem in this.list) {
        if (this.list[elem].includes(node)) {
            this.list[elem].splice(this.list[elem].indexOf(node), 1);
        }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (let elem in this.list) {
        cb(elem);
    };

/*     _.each(this.list, function(item) {
        cb(item);
    }); */
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

