import mitt, { Emitter } from 'mitt';

type Events = {
    foo: string;
    bar?: number;
};

// Create the emitter instance with typed events
const emitter: Emitter<Events> = mitt<Events>();

export default emitter;


// call


// const handleOnClick = () => {
//     emitter.emit('foo', 'dashboard - nada');
// };


// useEffect(() => {
//     const handleFoo = (e: string) => {
//         console.log("foo", e);
//     };

//     emitter.on('foo', handleFoo);

//     return () => {
//         emitter.off('foo', handleFoo);
//     };
// }, []);

