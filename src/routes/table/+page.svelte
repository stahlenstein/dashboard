<script lang="ts">
	import File from 'lucide-svelte/icons/file';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import Search from 'lucide-svelte/icons/search';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fetchData } from '$lib/supabase';

	import type { Database } from 'src/ambient.d.ts';

	let data: Database['public']['tables']['libraries']['Row'] | null = null;

	let Database = writable([]);

	onMount(async () => {
		try {
			const data = await fetchData();
			Database.set(data.libraries);
			// console.log(data.libraries);
		} catch (error) {
			console.error('Error fetching data:', error);
			// Handle error gracefully (e.g., show error message)
		}
	});
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
		<header
			class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
		>
			<Breadcrumb.Root class="hidden md:flex">
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Dashboard</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Libraries</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page>All Libraries</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
			<div class="relative ml-auto flex-1 md:grow-0">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
				/>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						size="icon"
						class="overflow-hidden rounded-full"
					>
						<img
							src="src/lib/images/placeholder-user.jpg"
							width={36}
							height={36}
							alt="Avatar"
							class="overflow-hidden rounded-full"
						/>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Logout</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
		<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<Tabs.Root value="all">
				<div class="flex items-center">
					<Tabs.List>
						<Tabs.Trigger value="all">All</Tabs.Trigger>
						<Tabs.Trigger value="active">Open</Tabs.Trigger>
						<Tabs.Trigger value="draft">Closed</Tabs.Trigger>
						<Tabs.Trigger value="archived" class="hidden sm:flex">Archived</Tabs.Trigger>
					</Tabs.List>
					<div class="ml-auto flex items-center gap-2">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<Button builders={[builder]} variant="outline" size="sm" class="h-7 gap-1">
									<ListFilter class="h-3.5 w-3.5" />
									<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Filter </span>
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content align="end">
								<DropdownMenu.Label>Filter by</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.CheckboxItem checked>Open</DropdownMenu.CheckboxItem>
								<DropdownMenu.CheckboxItem>Closed</DropdownMenu.CheckboxItem>
								<DropdownMenu.CheckboxItem>Archived</DropdownMenu.CheckboxItem>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<Button size="sm" variant="outline" class="h-7 gap-1">
							<File class="h-3.5 w-3.5" />
							<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Export </span>
						</Button>
						<Button size="sm" class="h-7 gap-1">
							<CirclePlus class="h-3.5 w-3.5" />
							<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Product </span>
						</Button>
					</div>
				</div>
				<Tabs.Content value="all">
					<Card.Root>
						<Card.Header>
							<Card.Title>Libraries</Card.Title>
							<Card.Description>
								Manage your Library Data and view details.
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<Table.Root>
									<Table.Header>
										<Table.Row>
											<Table.Head class="hidden w-[100px] sm:table-cell">
												<span class="sr-only">Image</span>
											</Table.Head>
											<Table.Head>Name</Table.Head>
											<Table.Head>Status</Table.Head>
											<Table.Head>Borough</Table.Head>
											<Table.Head class="hidden md:table-cell">Code</Table.Head>
											<Table.Head class="hidden md:table-cell">Address</Table.Head>
											<Table.Head>
												<span class="sr-only">Actions</span>
											</Table.Head>
										</Table.Row>
									</Table.Header>
									<Table.Body>
										{#each $Database as data}
										<Table.Row>
											<Table.Cell class="hidden sm:table-cell">
												<img
													alt="Product example"
													class="aspect-square rounded-md object-cover"
													height="64"
													src="src/lib/images/placeholder.svg"
													width="64"
												/>
											</Table.Cell>
											<Table.Cell class="font-medium">{data?.name}</Table.Cell>
											<Table.Cell>
												<Badge variant="outline">{data?.status}</Badge>
											</Table.Cell>
											<Table.Cell>{data?.borough}</Table.Cell>
											<Table.Cell class="hidden md:table-cell">{data?.code}</Table.Cell>
											<Table.Cell class="hidden md:table-cell">{data?.housenum} {data?.streetname}</Table.Cell>
											<Table.Cell>
												<DropdownMenu.Root>
													<DropdownMenu.Trigger asChild let:builder>
														<Button
															aria-haspopup="true"
															size="icon"
															variant="ghost"
															builders={[builder]}
														>
															<Ellipsis class="h-4 w-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													</DropdownMenu.Trigger>
													<DropdownMenu.Content align="end">
														<DropdownMenu.Label>Actions</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item>
													</DropdownMenu.Content>
												</DropdownMenu.Root>
											</Table.Cell>
										</Table.Row>
										{/each}
									</Table.Body>
							</Table.Root>
						</Card.Content>
						<Card.Footer>
							<div class="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of <strong>32</strong> products
							</div>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
		</main>
	</div>
</div>
