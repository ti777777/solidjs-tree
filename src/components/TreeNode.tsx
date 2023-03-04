import { For } from 'solid-js/web'
import type { Component } from 'solid-js';
import type Node from '../types/Node'


const TreeNode: Component<Node> = (props) => {
  return (
    <div class="flex">
        <div class="flex-none p-1">⨠</div>
        <div class="flex-1 p-1 w-100">
            <div>{props.content}</div>
            <For each={props.children}>
                {(child)=> <TreeNode content={child.content} children={child.children} />}
            </For>
        </div>
    </div>
  );
};

export default TreeNode;