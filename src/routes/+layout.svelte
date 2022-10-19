<script>
	import "@fontsource/gentium-plus/400-italic.css";
	import "@fontsource/gentium-plus/400.css";
	import "@fontsource/gentium-plus/700.css";
	import '../app.css';
</script>

<body class="bg-stone-50 heropattern-endlessclouds-blue-100 h-screen">
	<main class="container mx-auto flex flex-col items-center justify-center h-full px-8 py-8">
		<div class="max-w-lg w-full">
			<slot />
		</div>
	</main>
</body>
