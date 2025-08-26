import { Card, CardHeader } from "@/components/ui/card";
import mc from "minecraftstatuspinger";
import { useEffect } from "react";
export default function Servers() {
  const isOnline = true;
  const color = isOnline ? "green" : "red";

  useEffect(() => {
    async function fetchServerStatus() {
      try {
        let result = await mc.lookup({ host: "69.249.14.237" });
        console.log("Server status:", result);
      } catch (error) {
        console.error("Error fetching server status:", error);
      }
    }
    fetchServerStatus();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Servers</h1>

      <Card>
        <CardHeader>Modded Server</CardHeader>
        <div className="relative">
          <div className={`w-2 h-2 bg-${color}-500 rounded-full`} />
          <div className="absolute inset-0 w-2 h-2 bg-gray-700 dark:bg-white rounded-full animate-ping opacity-75" />
        </div>
      </Card>
    </div>
  );
}
