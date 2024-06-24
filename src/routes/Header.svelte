<script lang="ts">
	import Home from 'lucide-svelte/icons/house';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import Package from 'lucide-svelte/icons/package';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import Table2 from 'lucide-svelte/icons/table-2';
	import Settings from 'lucide-svelte/icons/settings';
    import PanelLeft from 'lucide-svelte/icons/panel-left';

	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
    import * as Sheet from '$lib/components/ui/sheet/index.js';
    import { Button } from '$lib/components/ui/button/index.js';
</script>

<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
	<nav class="flex flex-col items-center gap-4 px-2 py-4">
		<a
			href="/"
			class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
		>
			<img
				src="src/lib/images/logo-b2.svg"
				alt="NYPL Logo (white)"
				class="h-6 w-6 transition-all group-hover:scale-110"
			/>
			<span class="sr-only"></span>
		</a>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="/"
					class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<Home class="h-5 w-5" />
					<span class="sr-only">Home</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Home</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="##"
					class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<ShoppingCart class="h-5 w-5" />
					<span class="sr-only">Orders</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Orders</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="##"
					class="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<Package class="h-5 w-5" />
					<span class="sr-only">Products</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Products</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="##"
					class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<UsersRound class="h-5 w-5" />
					<span class="sr-only">Customers</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Customers</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="/table"
					class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<Table2 class="h-5 w-5" />
					<span class="sr-only">Table</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Table</Tooltip.Content>
		</Tooltip.Root>
	</nav>
	<nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="##"
					class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<Settings class="h-5 w-5" />
					<span class="sr-only">Settings</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Settings</Tooltip.Content>
		</Tooltip.Root>
	</nav>
</aside>
<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} size="icon" variant="outline" class="sm:hidden">
			<PanelLeft class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="sm:max-w-xs">
		<nav class="grid gap-6 text-lg font-medium">
			<a
				href="##"
				class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
			>
            <img
            src="src/lib/images/logo-b2.svg"
            alt="NYPL Logo (white)"
            class="h-6 w-6 transition-all group-hover:scale-110"
        />
				<span class="sr-only">Acme Inc</span>
			</a>
			<a
				href="##"
				class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
			>
				<Home class="h-5 w-5" />
				Dashboard
			</a>
			<a
				href="##"
				class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
			>
				<ShoppingCart class="h-5 w-5" />
				Orders
			</a>
			<a href="##" class="flex items-center gap-4 px-2.5 text-foreground">
				<Package class="h-5 w-5" />
				Products
			</a>
			<a
				href="##"
				class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
			>
				<UsersRound class="h-5 w-5" />
				Customers
			</a>
			<a
				href="##"
				class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
			>
				<Table2 class="h-5 w-5" />
				Settings
			</a>
		</nav>
	</Sheet.Content>
</Sheet.Root>
