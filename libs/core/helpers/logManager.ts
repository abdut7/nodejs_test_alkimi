import { createLogger, transports } from "winston";
export let logger;
export function generateLogger() {
  logger = createLogger({
    level: "info",
    transports: [
    //   new transports.KafkaStream({
    //     kafkaHost: "127.0.0.1:9092",
    //     producer: {
    //       topic: "Authentication-Service"
    //     }
    //   })
    ]
  });
}
