if (window.top === window) {

    function waitForElement(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
            childList: true,
            subtree: true
            });
        });
    }

    const addCommentButtons = document.querySelectorAll("[data-type='addition']")

    const submitButtonSelector = "button.btn.btn-primary > span.start-review-label"

    addCommentButtons.forEach(addCommentButton => {
        addCommentButton.addEventListener("click", function prReviewCheck(event) {

            addCommentButton.removeEventListener('click', prReviewCheck);

            waitForElement(submitButtonSelector).then(() => {
                const button = document.querySelector(submitButtonSelector).closest("button")

                button.addEventListener("click", function(e) {
                    if(!window.confirm("Do you want to start a review?")) {
                        e.preventDefault();
                    }
                });
            });
        });
    });
}
