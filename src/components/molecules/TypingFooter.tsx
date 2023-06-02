"use client";

import { type GenerateWordsSchema, type useTypeContext } from "@/lib";
import { cn } from "@/utils";
import { ExternalLinkIcon, RotateCw } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    buttonVariants,
} from "../atoms";

interface TypingFooterProps {
    url?: string;
    mode: GenerateWordsSchema["mode"];
    handleRestart: ReturnType<typeof useTypeContext>["handleRestart"];
    progress: ReturnType<typeof useTypeContext>["progress"];
}

export function TypingFooter({
    url,
    mode,
    handleRestart,
    progress,
}: TypingFooterProps) {
    if (progress !== "END") return null;

    return (
        <div className="mx-auto flex items-center gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className={cn(
                                buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                }),
                                "mx-auto w-fit cursor-pointer"
                            )}
                            aria-label="Restart"
                            onClick={handleRestart}
                        >
                            <RotateCw className="h-4 w-4" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Restart</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {mode === "wikipedia" && (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            asChild
                            className={cn(
                                buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                }),
                                "mx-auto w-fit"
                            )}
                        >
                            <a
                                target="_blank"
                                rel="noopener"
                                href={url}
                            >
                                <ExternalLinkIcon className="rr-2 h-4 w-4" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Visit Wikipedia</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    );
}
