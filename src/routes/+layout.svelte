<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<nav class="bg-white border-gray-200 dark:bg-zinc-700">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="https://bandasarcedo.netlify.app/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/favicon.png" class="h-15" alt="Logo banda" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CORPO BANDISTICO &#8220ELIA BASSANI&#8221</span>
		</a>

		<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
			<span class="sr-only">Menù principale</span>
			<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
			</svg>
		</button>

		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-700 md:dark:bg-zin-800 dark:border-gray-700">
				<li>
					<a href="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">PAGINA PRINCIPALE</a>
				</li>
				<li>
					<a href="/events" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">EVENTI</a>
				</li>
				<li>
					<a data-sveltekit-reload href="/photos" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FOTO</a>
				</li>
				<li>
					<a href="/contacts" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTATTI</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

{@render children()}
