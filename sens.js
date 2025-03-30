document.getElementById('ram-select').addEventListener('change', function() {
    const ram = this.value;
    const resultDiv = document.getElementById('sensitivity-result');
    let settings = '';

    switch (ram) {
        case '2gb':
            settings = `
                <p><strong>General:</strong> 90–100</p>
                <p><strong>Red Dot:</strong> 75–85</p>
                <p><strong>2X Scope:</strong> 80–90</p>
                <p><strong>4X Scope:</strong> 70–85</p>
                <p><strong>Sniper Scope:</strong> 50–60</p>
                <p><strong>Free Look:</strong> 50–75</p>
                <p><em>Tip: Use "Smooth" graphics for low-end devices.</em></p>
            `;
            break;
        case '3gb':
            settings = `
                <p><strong>General:</strong> 85–95</p>
                <p><strong>Red Dot:</strong> 70–80</p>
                <p><strong>2X Scope:</strong> 75–85</p>
                <p><strong>4X Scope:</strong> 65–80</p>
                <p><strong>Sniper Scope:</strong> 45–55</p>
                <p><strong>Free Look:</strong> 50–70</p>
                <p><em>Tip: Try High FPS if stable.</em></p>
            `;
            break;
        case '4gb':
            settings = `
                <p><strong>General:</strong> 80–100</p>
                <p><strong>Red Dot:</strong> 50–55</p>
                <p><strong>2X Scope:</strong> 80–90</p>
                <p><strong>4X Scope:</strong> 60–75</p>
                <p><strong>Sniper Scope:</strong> 40–50</p>
                <p><strong>Free Look:</strong> 50–75</p>
                <p><em>Tip: Adjust ±5 based on playstyle.</em></p>
            `;
            break;
        case '6gb':
            settings = `
                <p><strong>General:</strong> 75–90</p>
                <p><strong>Red Dot:</strong> 60–75</p>
                <p><strong>2X Scope:</strong> 70–85</p>
                <p><strong>4X Scope:</strong> 55–70</p>
                <p><strong>Sniper Scope:</strong> 35–50</p>
                <p><strong>Free Look:</strong> 40–60</p>
                <p><em>Tip: "Normal" graphics work well.</em></p>
            `;
            break;
        case '8gb':
            settings = `
                <p><strong>General:</strong> 70–85</p>
                <p><strong>Red Dot:</strong> 60–70</p>
                <p><strong>2X Scope:</strong> 65–80</p>
                <p><strong>4X Scope:</strong> 50–65</p>
                <p><strong>Sniper Scope:</strong> 30–45</p>
                <p><strong>Free Look:</strong> 25–50</p>
                <p><em>Tip: Use "Ultra" graphics if desired.</em></p>
            `;
            break;
        default:
            settings = '<p>Select your RAM to see the settings.</p>';
    }

    resultDiv.innerHTML = `
        <h2>Recommended Settings</h2>
        ${settings}
    `;
});