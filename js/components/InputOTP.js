/**
 * Input OTP Component
 * One Time-Password verification
 */
class InputOTPComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Input OTP</h3>
                <p class="component-description">Input OTP for One Time-Password verification</p>
            </div>
            <div class="component-preview">
                <ms-input-otp id="otp-id" length="4"></ms-input-otp>
            </div>
        `;

    setTimeout(() => {
      const otpInput = document.getElementById("otp-id");

      otpInput.addEventListener("completeEvent", ({ detail: value }) => {
        console.log("OTP Complete:", value);
      });

      otpInput.addEventListener("inputEvent", ({ detail: value }) => {
        console.log("OTP Input:", value);
      });
    }, 0);

    return card;
  }
}

export default InputOTPComponent;
