import { MessageSquareTextIcon, Pencil, Smile, Trash } from "lucide-react";
import { EmojiPopover } from "./emoji-popover";

import { Button } from "./ui/button";
import { Hint } from "./hint";

interface ToolbarProps {
    isAuthor: boolean;
    isPending: boolean;
    handleEdit: () => void;
    handleThread: () => void;
    handleDelete: () => void;
    handleReaction: (value: string) => void;
    hideThreadButton?: boolean;
};


export const Toolbar = ({
    isAuthor,
    isPending,
    handleEdit,
    handleThread,
    handleDelete,
    handleReaction,
    hideThreadButton,

}: ToolbarProps) => {

    return (
      <div className="absolute top-0 right-5">
        <div className="group-hover:opacity-100 opacity-0 transition-opacity border bg-white rounded-md shadow-sm">
          <EmojiPopover
            hint="Add reaction"
            onEmojiSelect={(emoji) => handleReaction(emoji.native)}
          >
            <Button variant="outline2" size="iconSm" disabled={isPending}>
              <Smile className="size-4 fill-yellow-500" />
            </Button>
          </EmojiPopover>

          {!hideThreadButton && (
            <Hint label="Reply in thread">
              <Button variant="outline2" size="iconSm" disabled={isPending} onClick={handleThread}>
                <MessageSquareTextIcon className="size-4 fill-green-500" />
              </Button>
            </Hint>
          )}

          {isAuthor && (
            <Hint label="Edit message">
              <Button variant="outline2" size="iconSm" disabled={isPending} onClick={handleEdit}>
                <Pencil className="size-4 fill-sky-500" />
              </Button>
            </Hint>
          )}

          {isAuthor && (
            <Hint label="Delete message">
              <Button variant="outline2" size="iconSm" disabled={isPending} onClick={handleDelete}>
                <Trash className="size-4 fill-red-500" />
              </Button>
            </Hint>
          )}
        </div>
      </div>
    );
};