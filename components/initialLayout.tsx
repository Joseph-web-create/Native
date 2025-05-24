import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthPage = segment[0] === "(auth)";

    if (!isSignedIn && !inAuthPage) router.replace("/(auth)/login");
    else if (isSignedIn && inAuthPage) router.replace("/(tabs)");
  }, [isLoaded, segment, isSignedIn, router]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
