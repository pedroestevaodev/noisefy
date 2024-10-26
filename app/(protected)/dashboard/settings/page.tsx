'use client';

import { useState, useTransition } from "react";
import * as z from "zod";
import { useSession } from "next-auth/react";
import { UserRole } from "@prisma/client";
import { settings } from "@/actions/settings";
import { useForm } from "react-hook-form";
import useCurrentUser from "@/hooks/useCurrentUser";
import { SettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteAccountSection from "@/components/dashboard/DeleteAccount";
import DashboardHeader from "@/components/dashboard/Header";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FormError } from "@/components/common/FormError";
import { FormSuccess } from "@/components/common/FormSuccess";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
	const user = useCurrentUser();
	const { update } = useSession();

	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			name: user?.name || undefined,
			email: user?.email || undefined,
			password: undefined,
			newPassword: undefined,
			role: user?.role || undefined,
			isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
		},
	});

	const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data.error) {
						setError(data.error);
					}

					if (data.success) {
						update();
						setSuccess(data.success);
					}
				})
				.catch(() => {
					setError("Something went wrong");
				});
		});
	};

	return (
		<>
			<DashboardHeader
				heading="Settings"
				text="Manage account and website settings."
			/>
			<div className="divide-y divide-muted pb-10">
				<Form {...form}>
					<form
						className="space-y-6"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<div className="space-y-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="text"
												placeholder="John Doe"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{user?.isOAuth === false && (
								<>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														{...field}
														type="email"
														placeholder="john.doe@example.com"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input
														{...field}
														type="password"
														placeholder="******"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="newPassword"
										render={({ field }) => (
											<FormItem>
												<FormLabel>New Password</FormLabel>
												<FormControl>
													<Input
														{...field}
														type="password"
														placeholder="******"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}
							<FormField
								control={form.control}
								name="role"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Role</FormLabel>
										<Select
											defaultValue={field.value}
											onValueChange={field.onChange}
											disabled={isPending}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select a role" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value={UserRole.ADMIN}>
													Admin
												</SelectItem>
												<SelectItem value={UserRole.USER}>
													User
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							{user?.isOAuth === false && (
								<FormField
									control={form.control}
									name="isTwoFactorEnabled"
									render={({ field }) => (
										<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
											<div className="space-y-0.5">
												<FormLabel>Two Factor Authentication</FormLabel>
												<FormDescription>
													Enable two factor authentication for your account
												</FormDescription>
											</div>
											<FormControl>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
													disabled={isPending}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
							)}
						</div>
						<FormError message={error} />
						<FormSuccess message={success} />
						<Button
							type="submit"
							disabled={isPending}
						>
							Save
						</Button>
					</form>
				</Form>
				<DeleteAccountSection />
			</div>
		</>
	);
}
