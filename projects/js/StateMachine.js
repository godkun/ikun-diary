class StateMachine {
    constructor(states, initialState) {
        this.states = states; // 所有可能的状态
        this.state = initialState; // 当前状态
        this.handlers = {}; // 事件处理函数
    }

    // 注册事件处理函数
    on(event, handler) {
        this.handlers[event] = handler;
    }

    // 触发事件，根据当前状态执行相应的处理函数
    trigger(event, ...args) {
        const handler = this.handlers[event];
        if (handler) {
            const nextState = handler(this.state, ...args);
            if (nextState && this.states.includes(nextState)) {
                this.state = nextState;
            } else {
                throw new Error(`Invalid transition from ${this.state} on event ${event}`);
            }
        }
    }

    // 获取当前状态
    getCurrentState() {
        return this.state;
    }
}

// 使用示例
const states = ['locked', 'unlocked', 'error'];
const initialState = 'locked';

// 定义状态机
const stateMachine = new StateMachine(states, initialState);

// 定义事件处理函数
stateMachine.on('unlock', (currentState) => {
    if (currentState === 'locked') {
        return 'unlocked';
    }
    throw new Error('Invalid state for unlock event');
});

stateMachine.on('lock', (currentState) => {
    if (currentState === 'unlocked') {
        return 'locked';
    }
    throw new Error('Invalid state for lock event');
});

// 触发事件
try {
    console.log(`Initial state: ${stateMachine.getCurrentState()}`); // locked
    stateMachine.trigger('unlock');
    console.log(`State after unlock: ${stateMachine.getCurrentState()}`); // unlocked
    stateMachine.trigger('lock');
    console.log(`State after lock: ${stateMachine.getCurrentState()}`); // locked
} catch (error) {
    console.error(error.message);
}