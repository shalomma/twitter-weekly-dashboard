const Ably = require('ably');

async function publishSubscribe() {

  // Connect to Ably with your API key
  const ably = new Ably.Realtime("n2EvRA.OMV1Lg:G3N5Y5Qi1yJkUwLQH-ayqjaiIDZ4HYMCj40Lyyb-27I");
  ably.connection.once("connected", () => {
    console.log("Connected to Ably!")
  })

  const channel = ably.channels.get("notifications:users")
  await channel.subscribe("first", (message) => {
    console.log("Message received: " + message.data)
  });

  await channel.publish(
    'new-notification',
    data={
      'message': 'Hello, World!'
    },
  )

  // Close the connection to Ably after a 5 second delay
  setTimeout(async () => {
    ably.connection.close();
      await ably.connection.once("closed", function () {
        console.log("Closed the connection to Ably.")
      });
  }, 5000);
}

publishSubscribe();
