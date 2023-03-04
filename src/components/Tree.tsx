import  { For } from "solid-js";
import type { Component } from "solid-js";
import type Node from '../types/Node'
import TreeNode from './TreeNode'

const data: Node[] = [
  {
    content: "1",
    children:[
      {
        content: "1-1"
      },
      {
        content: "1-2"
      },
    ]
  }
]

const Tree: Component = () => {
  return (
    <div class="shadow-md p-5 bg-white rounded-md">
        <For each={data}>{
          (child)=><TreeNode content={child.content} children={child.children} />
        }
        </For>
    </div>
  );
};

export default Tree;
