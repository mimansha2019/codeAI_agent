async function generateCode() {
    const prompt = document.getElementById("prompt").value;
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Loading...";

    try {
        const res = await fetch("/generate-code", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });

        const data = await res.json();

        if (data.response) {
            const html = marked.parse(data.response);
            responseDiv.innerHTML = html;

            // Highlight code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        } else {
            responseDiv.textContent = "No response or error from server.";
        }
    } catch (err) {
        responseDiv.textContent = "Error: " + err.message;
    }
}
