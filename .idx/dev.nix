{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.bun
    pkgs.fish
  ];
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "dsznajder.es7-react-js-snippets"
    "alfredbirk.tailwind-documentation"
    "bradlc.vscode-tailwindcss"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-complete-tag"
    "formulahendry.auto-rename-tag" 
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
