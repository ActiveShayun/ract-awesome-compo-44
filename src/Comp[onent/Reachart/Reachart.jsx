import { LineChart,   Line, XAxis,YAxis } from 'recharts';
const Reachart = () => {
    const studentData = [
        { id: 1, name: "Alice", math: 72, chemistry: 78, physics: 85 },
        { id: 2, name: "Bob", math: 85, chemistry: 82, physics: 80 },
        { id: 3, name: "Charlie", math: 78, chemistry: 75, physics: 79 },
        { id: 4, name: "David", math: 90, chemistry: 88, physics: 92 },
        { id: 5, name: "Eva", math: 88, chemistry: 91, physics: 86 },
        { id: 6, name: "Frank", math: 65, chemistry: 70, physics: 72 },
        { id: 7, name: "Grace", math: 92, chemistry: 89, physics: 94 },
        { id: 8, name: "Hannah", math: 74, chemistry: 76, physics: 80 },
        { id: 9, name: "Ian", math: 80, chemistry: 84, physics: 78 },
        { id: 10, name: "Julia", math: 69, chemistry: 73, physics: 75 }
      ];
      
      
    return (
        <div>
           <LineChart width={500} height={400} data={studentData}>
           <XAxis dataKey="name" />
           <YAxis ></YAxis>
            <Line dataKey='math'></Line>
            <Line dataKey='chemistry'></Line>
           </LineChart>
        </div>
    );
};

export default Reachart;