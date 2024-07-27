import { AreaChartDemo } from "@/components/areachart";
import { BarCharDemo } from "@/components/barchart";
import { LineChartDemo } from "@/components/linechart";
import { RadarChartDemo } from "@/components/radarchart";
import { RadialChartDemo } from "@/components/radialchart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex w-full max-w-5xl flex-col items-start justify-between gap-4 font-mono text-sm">
        <h1 className="text-4xl">ShadCN Charts Demo</h1>
        <p className="text-sm">
          Showcase of random ShadCN Charts for illustration purposes.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <BarCharDemo />
          <LineChartDemo />
          <RadarChartDemo />
          <RadialChartDemo />
        </div>
        <div className="w-full">
          <AreaChartDemo />
        </div>
      </div>
    </main>
  );
}
