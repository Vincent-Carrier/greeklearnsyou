<script>
	import "@fontsource/gentium-plus/400-italic.css";
	import "@fontsource/gentium-plus/400.css";
	import "@fontsource/gentium-plus/700.css";
	import '../app.css';
</script>

<body class="bg-sky-900 heropattern-endlessclouds-sky-700 h-screen">
	<main class="container mx-auto flex flex-col items-center justify-center h-full px-20 py-20">
		<div class="w-96">
			<slot />
		</div>
	</main>
</body>
