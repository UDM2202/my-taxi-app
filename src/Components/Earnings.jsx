import { AreaChart, Area, Tooltip, ResponsiveContainer  } from "recharts";

const Earnings = () => {
  const data = [
  { data: 4500 },
  {
    data: 5000,
  },
  {
    data: 4700,
  },
  {
    data: 4400,
  },
  {
    data: 4800,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6580,
  },
  {
    data: 6780,
  },
  {
    data: 6680,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 5900,
  },
  {
    data: 5700,
  },
  {
    data: 5500,
  },
  {
    data: 5300,
  },
  {
    data: 5100,
  },
  {
    data: 5090,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6780,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6700,
  },
  {
    data: 7000,
  },
  {
    data: 7300,
  },
  {
    data: 7500,
  },
  {
    data: 7700,
  },
  {
    data: 8090,
  },
  {
    data: 8190,
  },
  {
    data: 7990,
  },

  {
    data: 7700,
  },
  {
    data: 7500,
  },
  {
    data: 7300,
  },
  {
    data: 7000,
  },
  {
    data: 6700,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6780,
  },
  {
    data: 6300,
  },
  {
    data: 6000,
  },
  {
    data: 5800,
  },

  {
    data: 5490,
  },
  {
    data: 6000,
  },
  {
    data: 8000,
  },
];
  return (
    <div className="cards  p-4">
       <div className="top">
        <div className="info text-center flex flex-col gap-2  items-center">
          <h5 className="font-bold">This month earnings</h5>
          <h1 className="text-2xl font-bold">$682.5</h1>
          <div className="growth  p-2 rounded-full text-primary hover:bg-primary hover:text-black w-[6rem] bg-[#d7e41e1d] 
           transition-all 
  duration-300 
  ease-in-out mb-3">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart relative pb-[50%]">
        <div className="absolute top-0 left-0 w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Earnings
