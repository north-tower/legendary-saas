import { SetStateAction, useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Page() {
  const [message, setMessage] = useState('');

  const handleMessageSend = async () => {
    try {
      const response = await fetch('http://localhost:3001/writeData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), // Assuming your Express server expects 'message' field
      });
      if (response.ok) {
        console.log('Message sent successfully');
        // Optionally, you can reset the message input field here
        setMessage('');
      } else {
        console.error('Failed to send message');
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error scenario
    }
  };
  

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid w-full gap-2 mt-2">
        <Textarea
          placeholder="Type your message here."
          value={message}
          onChange={handleInputChange}
        />
        <Button onClick={handleMessageSend}>Send message</Button>
      </div>
    </div>
  );
}

export default Page;
