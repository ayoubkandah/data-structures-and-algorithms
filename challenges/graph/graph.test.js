"use strict";
const { Graph, Node } = require("./graph.js");

describe("Graph Tests", () => {
  const graph = new Graph();
  const nodde1 = new Node(1);
  const nodde2 = new Node(2);
  const nodde3 = new Node(3);
  const nodde4 = new Node(4);
  graph.AddNode(nodde1);
  graph.AddNode(nodde2);
  graph.AddNode(nodde3);
  graph.AddNode(nodde4);
  graph.AddEdge(nodde1, nodde2,1);
  graph.AddEdge(nodde1, nodde3,2);
  graph.AddEdge(nodde2, nodde4,3);
  it("Adding", () => {
    expect(graph._adjacencyList.has(nodde2)).toBeTruthy();
    expect(graph._adjacencyList.has(nodde3)).toBeTruthy();
  });
  it("edge test", () => {
    expect(graph._adjacencyList.get(nodde1)[0].node).toBe(nodde2);
    expect(graph._adjacencyList.get(nodde1)[1].node).toBe(nodde3);
  });
  it("All nodes", () => {
    expect(graph.GetNodes()).toEqual([nodde1,nodde2,nodde3,nodde4]);
  });
  it("neighbers test", () => {
    expect(graph.GetNeighbors(nodde2)).toEqual([{"node": {"value": 4}, "weight": 3}]
    );
  });
  it("wieght test", () => {
    expect(graph.GetNeighbors(nodde1)[0].weight).toEqual(1);
    expect(graph.GetNeighbors(nodde1)[1].weight).toEqual(2);
  });
  it("size test", () => {
    expect(graph.size()).toEqual(4);
  });
  it("A graph with only one node and edge can be properly returned", () => {
    const graph2 = new Graph();
    const temp = new Node(10);
    graph2.AddNode(temp);
    graph2.AddEdge(temp, temp);
    expect(graph2.GetNodes()[0]).toEqual(temp);
  });
  it("An empty graph properly returns null", () => {
    const temp = new Graph();
    expect(temp.GetNodes()).toBeNull();
  });
});
