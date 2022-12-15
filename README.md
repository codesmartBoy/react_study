## 函数式组件的缺点

## useState

const [couter, setCounter] = useState(0);

## useEffect

生命周期特性
网络请求/事件监听/store.subscribe

### 需要清楚 effect

### 一个组件中可以有多个 useEffect

### effect 性能优化

useEffect 第二个参数[xx] 受某个因素的影响

## useContext

const user = useContext(UserContext);

## useReducer 是 useState 的替代方案

## useCallback useMemo

对函数优化

## useMemo

对返回结果优化

## useRef

ref 每次返回同一个对象
ref.current = count;
const incrementCallback = useCallback(() => setCount(ref.current + 1), []);

绑定 dom

## useImperativeHandle

function handleDom() {
console.log(titleRef.current);
inputRef.current.focus();
}

forwardRef((props, ref) => {
useImperativeHandle(ref, () => {
return {
focus() {
console.log("first");
},
};
});
return <input type="text" ref={ref} />;
})

## useLayoutEffect

在 dom 渲染前 run,会阻塞 dom 执行

## redux 中的 hook

npm i reduxjs/toolkit@1.9.1 react-redux@8.0.5

### useSelector

useSelector 默认监听的是整个 state

## useId

## useTransition

告诉 react 对于某部分任务的更新优先级较低，可以稍后进行更新
const [pending, startTransition] = useTransition();
pending 表示任务状态

## useDeferredValue

延迟更新
