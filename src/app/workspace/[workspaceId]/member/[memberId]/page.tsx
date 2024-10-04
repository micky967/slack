'use client';

import { useEffect, useState } from "react";
import { AlertTriangle, Loader } from "lucide-react";
import { toast } from "sonner";

import { useCreateOrGetConversation } from "@/features/conversations/api/use-create-or-get-conversation";

import { Conversation } from "./conversation";
import { useMemberId } from "@/hooks/use-member-id";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

import { Id } from "../../../../../../convex/_generated/dataModel";

const MemberIdPage = () => {

    const memberId = useMemberId();
    const workspaceId = useWorkspaceId();

    const [conversationId, setConversationId] = useState<Id<"conversations"> | null>(null);

    const {mutate, isPending} = useCreateOrGetConversation();

    useEffect(() => {
        mutate({
            workspaceId,
            memberId,
        }, {
            onSuccess(data) {
                setConversationId(data);
            },
            onError() {
                toast.error("Failed to create or get conversation")
            },
        })
    }, [memberId, workspaceId, mutate]);

    if (isPending) {
        return (
          <div className="flex h-full items-center justify-center">
            <Loader className="size-5 animate-spin text-green-500" />
          </div>
        );
    }

    if (!conversationId) {
        return (
          <div className="flex flex-col gap-y-2 h-full items-center justify-center">
            <AlertTriangle className="size-5 text-red-500" />
            <span className="text-sm text-muted-foreground">Conversation not found !</span>
          </div>
        );
    }

    return (
        <Conversation 
        id={conversationId}
        />
    )
};
 
export default MemberIdPage;