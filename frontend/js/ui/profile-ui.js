    $(document).ready(function () {
        $("#userName").text("Welcome " + localStorage.getItem("userName") + " !");
    });

    // Profile dropdown functionality
    const profileBtn = document.getElementById('profileBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const profileSection = document.getElementById('profileSection');

    // Toggle dropdown
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdownMenu.classList.add('hidden');
    });

    // Sidebar tab functionality
    const myPostsTab = document.getElementById('myPostsTab');
    const lostPostsTab = document.getElementById('lostPostsTab'); // rename this in HTML too later

    const myPostsContent = document.getElementById('myPostsContent');
    const lostPostsContent = document.getElementById('lostPostsContent');

    const tabs = [myPostsTab, lostPostsTab];
    const contents = [myPostsContent, lostPostsContent];

    function switchTab(activeTab, activeContent) {
        // Update tab styles
        tabs.forEach(tab => {
            tab.classList.remove('bg-indigo-100', 'text-indigo-700', 'font-medium');
            tab.classList.add('text-gray-600', 'hover:bg-gray-100', 'hover:text-gray-900');
        });

        activeTab.classList.remove('text-gray-600', 'hover:bg-gray-100', 'hover:text-gray-900');
        activeTab.classList.add('bg-indigo-100', 'text-indigo-700', 'font-medium');

        // Update content visibility
        contents.forEach(content => {
            content.classList.add('hidden');
        });
        activeContent.classList.remove('hidden');
    }

    // Tab click handlers
    myPostsTab.addEventListener('click', () => {
        switchTab(myPostsTab, myPostsContent);
    });

    lostPostsTab.addEventListener('click', () => {
        switchTab(lostPostsTab, lostPostsContent);
    });
