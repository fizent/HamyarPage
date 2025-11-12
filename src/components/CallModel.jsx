// callModel.js
export async function callModel(prompt) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/fizent/Fazel_YOLO_Part_Of_Car_Detection",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_HF_TOKEN", // توکن HF خودت رو بذار
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();
  return data;
}
