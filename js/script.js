(() => {
	const toggledrawerButtons = document.querySelectorAll(".drawer-toggle-btn");
	const sideDrawers = document.querySelectorAll(".drawer");
	const overlay = document.getElementById("bg-overlay");

	function closesideDrawers() {
		sideDrawers.forEach((drawer) => {
			drawer.classList.replace("open", "closed");
			overlay.classList.replace("open", "hidden");
		});
	}

	toggledrawerButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			closesideDrawers();
			let selection = -1;
			try {
                selection = parseInt(e.target.dataset?.drawerNumber);
                console.log(e.target.dataset.drawerNumber)
                sideDrawers[selection].classList.replace("closed", "open");
                overlay.classList.replace("hidden", "open");
			} catch (error) {
				// Could not convert data-drawer-number to an int OR
                // an likely an undefined error arose when trying to toggle classes.
				console.error(error);
				return;
			}
		});
	});

	document.querySelectorAll(".drawer button.close").forEach((closeBtn) => {
		closeBtn.addEventListener("click", (e) => {
			closesideDrawers();
		});
	});
})();
