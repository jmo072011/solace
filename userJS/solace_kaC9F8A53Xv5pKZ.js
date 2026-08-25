console.log("Owner profile environment loaded. All system overrides granted ");

const userSessionConfiguration = {
    identityKey: "solace_kaC9F8A53Xv5pKZ",
    assignedRole: "Owner",
    clearanceLevel: "ROOT_ADMINISTRATOR"
};

document.addEventListener("DOMContentLoaded", () => {
    const roleBadge = document.getElementById("profileRole");
    if (roleBadge) {
        roleBadge.textContent = userSessionConfiguration.assignedRole;
    }
});
