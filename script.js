async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const responseElement = document.getElementById('response');

    // Gọi API AI (ví dụ: Hugging Face hoặc OpenAI)
    const apiUrl = 'https://api-inference.huggingface.co/models/gpt2';
    const apiKey = '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'; // Thay bằng API key của bạn

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: userInput })
    });

    const data = await response.json();
    responseElement.innerText = data[0]?.generated_text || 'Không có phản hồi';
}
